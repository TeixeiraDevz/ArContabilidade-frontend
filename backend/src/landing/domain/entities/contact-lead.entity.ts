export class ContactLeadEntity {
  constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly email: string,
    public readonly phone: string,
    public readonly company: string | null,
    public readonly message: string,
    public readonly createdAt: Date
  ) {}
}
