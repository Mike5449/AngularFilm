export interface IRating {
  Source?: string
  Value?: string
}


export class Rating implements IRating {
  constructor(
    public Source?: string,
    public Value?: string
  ) {
  }
}
