export class Singleton {
  private static instance: Singleton | null = null;

  private count: number = 0;

  private constructor() {}

  public static getInstance(): Singleton {
    if (Singleton.instance === null) {
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }

  public increment(): void {
    this.count += 1;
  }

  public getCount(): number {
    return this.count;
  }
}