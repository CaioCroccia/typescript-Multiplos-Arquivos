class Greeter{
  greeting: string;

  constructor(_greeting: string){
    this.greeting = _greeting;
  }
  GetGreet(){
    return 'Hello, ' + this.greeting;
  }
}