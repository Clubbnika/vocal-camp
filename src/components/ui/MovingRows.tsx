"use client";

export const MovingRows = () => {
  const commonClasses =
    "whitespace-nowrap flex h-full text-[100px] text-[#ff00be] leading-[1] font-bold";

  return (
    <div className="overflow-hidden w-full bg-transparent">
      <div className="flex animate-moving-right w-[200%]">
        <div className={commonClasses} aria-hidden="true">
          VOCAL — <span className="italic">CAMP</span> — MUSIC —{' '}
          <span className="italic">GOOD TIME</span> — VOCAL —{' '}
          <span className="italic">CAMP</span> — MUSIC —{' '}
          <span className="italic">GOOD TIME</span> —
        </div>
        <div className={commonClasses}>
          SONGS — <span className="italic">IMPROVISATION</span> — INSTRUMENTS —{' '}
          <span className="italic">FORTEPIANO</span> — SONGS —{' '}
          <span className="italic">IMPROVISATION</span> — INSTRUMENTS —{' '}
          <span className="italic">FORTEPIANO</span> —
        </div>
      </div>

      <div className="flex animate-moving-left w-[200%]">
        <div className={commonClasses}>
          DRUMS — <span className="italic">GUITAR</span> — UKULELE —{' '}
          <span className="italic">MICROPHONE</span> — DRUMS —{' '}
          <span className="italic">GUITAR</span> — UKULELE —{' '}
          <span className="italic">MICROPHONE</span> —
        </div>
        <div className={commonClasses} aria-hidden="true">
          VOCAL — <span className="italic">CAMP</span> — MUSIC —{' '}
          <span className="italic">VOICE</span> — VOCAL —{' '}
          <span className="italic">CAMP</span> — MUSIC —{' '}
          <span className="italic">VOICE</span> —
        </div>
      </div>

      <div className="flex animate-moving-right w-[200%]">
        <div className={commonClasses}>
          <span className="italic">IMPROVISATION</span> — SONGS —{' '}
          <span className="italic">ROCK</span> — POP —{' '}
          <span className="italic">IMPROVISATION</span> — SONGS —{' '}
          <span className="italic">ROCK</span> — POP —
        </div>
        <div className={commonClasses} aria-hidden="true">
          JAZZ — <span className="italic">ELECTRO MUSIC</span> — GOOD TIME —{' '}
          <span className="italic">PUNK</span> — JAZZ —{' '}
          <span className="italic">ELECTRO MUSIC</span> — GOOD TIME —{' '}
          <span className="italic">PUNK</span> —
        </div>
      </div>
    </div>
  );
};