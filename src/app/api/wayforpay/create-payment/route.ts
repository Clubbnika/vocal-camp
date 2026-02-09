import { NextRequest, NextResponse } from 'next/server';
import CryptoJS from 'crypto-js';
import { CartItem } from '@/store/cartStore';

interface WayForPayPaymentData {
  merchantAccount: string;
  merchantDomainName: string;
  orderReference: string;
  orderDate: number;
  amount: number;
  currency: string;
  productName: string[];
  productCount: string[];
  productPrice: string[];
  merchantSignature: string;
  clientFirstName: string;
  clientLastName: string;
  clientEmail: string;
  clientPhone: string;
  language: string;
}

interface ApiResponse {
  success: boolean;
  data?: WayForPayPaymentData;
  error?: string;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { items, total } = body as {
      items: CartItem[];
      total: number;
    };

    if (!items || !Array.isArray(items) || items.length === 0 || total <= 0) {
      return NextResponse.json<ApiResponse>(
        { 
          success: false, 
          error: 'Некоректні дані замовлення: порожній кошик або некоректна сума' 
        }, 
        { status: 400 }
      );
    }

    const MERCHANT_ACCOUNT = process.env.NEXT_PUBLIC_WFP_MERCHANT_ACCOUNT;
    const MERCHANT_SECRET = process.env.WFP_MERCHANT_SECRET;

    if (!MERCHANT_ACCOUNT || !MERCHANT_SECRET) {
      console.error('WayForPay: Відсутні налаштування в .env');
      return NextResponse.json<ApiResponse>(
        { 
          success: false, 
          error: 'Відсутні налаштування WayForPay (перевірте .env файл)' 
        }, 
        { status: 500 }
      );
    }

    const orderReference = `ORD-${Date.now()}-${Math.floor(Math.random() * 10000)}`;
    const orderDate = Math.floor(Date.now() / 1000);
    const amount = Math.round(total);

    const productNames: string[] = items.map((item: CartItem) => item.name.trim());
    const productPrices: string[] = items.map((item: CartItem) => Math.round(item.price).toString());
    const productCounts: string[] = items.map((item: CartItem) => item.quantity.toString());

    console.log('=== WayForPay SERVER DEBUG ===');
    console.log('merchantAccount:', MERCHANT_ACCOUNT);
    console.log('orderReference:', orderReference);
    console.log('orderDate:', orderDate);
    console.log('amount:', amount);
    console.log('productNames:', productNames);
    console.log('productCounts:', productCounts);
    console.log('productPrices:', productPrices);

    const fields: string[] = [
      MERCHANT_ACCOUNT,
      orderReference,
      orderDate.toString(),
      amount.toString(),
      'UAH',
      productNames.join(';'),
      productCounts.join(';'),
      productPrices.join(';'),
    ];

    const signString = fields.join(';');
    const merchantSignature = CryptoJS.HmacSHA1(signString, MERCHANT_SECRET)
      .toString(CryptoJS.enc.Base64);

    console.log('signString:', signString);
    console.log('merchantSignature:', merchantSignature);

    const paymentData: WayForPayPaymentData = {
      merchantAccount: MERCHANT_ACCOUNT,
      merchantDomainName: process.env.NEXT_PUBLIC_SITE_DOMAIN || 'localhost',
      orderReference,
      orderDate,
      amount,
      currency: 'UAH',
      productName: productNames,
      productCount: productCounts,
      productPrice: productPrices,
      merchantSignature,
      clientFirstName: 'Клієнт',
      clientLastName: '',
      clientEmail: '',
      clientPhone: '',
      language: 'UA',
    };

    return NextResponse.json<ApiResponse>({
      success: true,
      data: paymentData,
    });

  } catch (error) {
    console.error('WayForPay API помилка:', error);
    return NextResponse.json<ApiResponse>(
      { 
        success: false, 
        error: 'Помилка сервера при створенні платежу' 
      }, 
      { status: 500 }
    );
  }
}