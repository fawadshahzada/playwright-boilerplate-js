import { setWorldConstructor, World } from "@cucumber/cucumber";

class CustomWorld extends World {
  page;
  browser;
}

setWorldConstructor(CustomWorld);