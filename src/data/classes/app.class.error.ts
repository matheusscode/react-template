type Variant = "error" | "warning" | "success";
type Name = "Exception";

class AppError {
  public readonly message: string;
  public readonly variant: Variant;
  public readonly name?: Name;

  constructor(message: string, variant: Variant, name?: Name) {
    this.message = message;
    this.variant = variant;
    this.name = name;
  }
}

export default AppError;
