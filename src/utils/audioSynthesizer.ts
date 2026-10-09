/** Plays the uploaded wedding music track through the shared audio controls. */
import weddingTrack from '../assets/images/DAS MEREYA DILBARA Sofia Inder Jashan Inder New Punjabi Song 2023.mp3';

class WeddingAudioPlayer {
  private ctx: AudioContext | null = null;
  private isPlaying: boolean = false;
  private timer: number | null = null;
  private masterGain: GainNode | null = null;
  private droneOscs: OscillatorNode[] = [];
  private volume: number = 0.7;

  // "Raatan Lambiyan" & "Din Shagna Da" melody phrase notes (in Hz)
  // E4, G4, A4, B4, C5, B4, A4, G4, E4, G4, A4, G4, E4, D4, C4
  private melodyNotes: { freq: number; dur: number }[] = [
    { freq: 329.63, dur: 450 }, // E4 (Te-)
    { freq: 392.00, dur: 450 }, // G4 (-ri)
    { freq: 440.00, dur: 600 }, // A4 (me-)
    { freq: 392.00, dur: 500 }, // G4 (-ri)
    { freq: 329.63, dur: 650 }, // E4 (gal-)
    { freq: 293.66, dur: 550 }, // D4 (-lan)
    { freq: 261.63, dur: 800 }, // C4 (hoyi)
    { freq: 293.66, dur: 450 }, // D4 (mash-)
    { freq: 329.63, dur: 900 }, // E4 (-hoor)

    { freq: 329.63, dur: 450 }, // Kar
    { freq: 392.00, dur: 450 }, // na
    { freq: 440.00, dur: 600 }, // ka-
    { freq: 493.88, dur: 600 }, // -bhi
    { freq: 523.25, dur: 700 }, // tu
    { freq: 493.88, dur: 450 }, // mujh-
    { freq: 440.00, dur: 450 }, // -e
    { freq: 392.00, dur: 600 }, // naz-
    { freq: 349.23, dur: 500 }, // -ron
    { freq: 329.63, dur: 500 }, // se
    { freq: 293.66, dur: 850 }, // door

    // Kitte chaliye tu...
    { freq: 329.63, dur: 500 },
    { freq: 392.00, dur: 500 },
    { freq: 440.00, dur: 750 },
    { freq: 392.00, dur: 650 },
    { freq: 329.63, dur: 900 },

    // Din Shagna Da bridal chime
    { freq: 523.25, dur: 650 },
    { freq: 440.00, dur: 500 },
    { freq: 392.00, dur: 600 },
    { freq: 329.63, dur: 700 },
    { freq: 293.66, dur: 650 },
    { freq: 261.63, dur: 1100 },
  ];

  private currentNoteIndex = 0;
  private audio: HTMLAudioElement | null = null;

  private getAudio(): HTMLAudioElement {
    if (!this.audio) {
      this.audio = new Audio(weddingTrack);
      this.audio.loop = true;
      this.audio.volume = this.volume;
    }

    return this.audio;
  }

  private initContext() {
    if (!this.ctx) {
      const AudioContextClass =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioContextClass();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(this.volume, this.ctx.currentTime);
      this.masterGain.connect(this.ctx.destination);
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public setVolume(vol: number) {
    this.volume = Math.max(0, Math.min(1, vol));
    if (this.audio) this.audio.volume = this.volume;
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setTargetAtTime(this.volume, this.ctx.currentTime, 0.05);
    }
  }

  public getVolume(): number {
    return this.volume;
  }

  private startTanpuraDrone() {
    if (!this.ctx || !this.masterGain) return;
    this.stopTanpuraDrone();

    const droneFreqs = [130.81, 196.0, 261.63, 392.0];

    droneFreqs.forEach((freq, idx) => {
      if (!this.ctx || !this.masterGain) return;
      const osc = this.ctx.createOscillator();
      const droneGain = this.ctx.createGain();
      const filter = this.ctx.createBiquadFilter();

      osc.type = idx % 2 === 0 ? 'sine' : 'triangle';
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(500, this.ctx.currentTime);

      droneGain.gain.setValueAtTime(0.045, this.ctx.currentTime);

      osc.connect(filter);
      filter.connect(droneGain);
      droneGain.connect(this.masterGain);

      osc.start();
      this.droneOscs.push(osc);
    });
  }

  private stopTanpuraDrone() {
    this.droneOscs.forEach((osc) => {
      try {
        osc.stop();
        osc.disconnect();
      } catch {
        // already stopped
      }
    });
    this.droneOscs = [];
  }

  private playNextNote() {
    if (!this.isPlaying || !this.ctx || !this.masterGain) return;

    const note = this.melodyNotes[this.currentNoteIndex % this.melodyNotes.length];
    this.currentNoteIndex++;

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    const filter = this.ctx.createBiquadFilter();

    // Shehnai & reed acoustic timbre
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(note.freq, now);

    // Subtle pitch meend (classic shehnai ornament)
    osc.frequency.exponentialRampToValueAtTime(note.freq * 1.012, now + 0.1);
    osc.frequency.exponentialRampToValueAtTime(note.freq, now + 0.28);

    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(note.freq * 1.6, now);
    filter.Q.setValueAtTime(3.2, now);

    const durSec = note.dur / 1000;
    gain.gain.setValueAtTime(0.001, now);
    gain.gain.linearRampToValueAtTime(0.14, now + 0.08);
    gain.gain.exponentialRampToValueAtTime(0.001, now + durSec + 0.15);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain);

    osc.start(now);
    osc.stop(now + durSec + 0.2);

    this.timer = window.setTimeout(() => this.playNextNote(), note.dur);
  }

  public play(): boolean {
    if (this.isPlaying) return true;
    this.isPlaying = true;
    void this.getAudio().play().catch(() => {
      this.isPlaying = false;
    });
    return true;
  }

  public pause(): void {
    this.isPlaying = false;
    this.audio?.pause();
    if (this.timer) {
      clearTimeout(this.timer);
      this.timer = null;
    }
    this.stopTanpuraDrone();
  }

  public toggle(): boolean {
    if (this.isPlaying) {
      this.pause();
      return false;
    } else {
      return this.play();
    }
  }

  public getIsPlaying(): boolean {
    return this.audio ? !this.audio.paused && !this.audio.ended : false;
  }
}

export const weddingAudio = new WeddingAudioPlayer();
