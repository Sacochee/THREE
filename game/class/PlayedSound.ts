import { Audio } from "three";

export default class {
  private play: HTMLAudioElement | null = null;
  private sound: boolean;
  private volume: number;

  constructor(sound: boolean, volume: number) {
    this.sound = sound;
    this.volume = volume;
  }

  changeSetting(sound: boolean, volume: number) {
    this.sound = sound;
    this.volume = volume;
    if (this.play) {
      this.play.volume = this.volume;
      !this.sound ? this.play.pause() : this.play.play();
    }
  }

  setPlay(audio: HTMLAudioElement | null) {
    this.play = audio;
  }
}
