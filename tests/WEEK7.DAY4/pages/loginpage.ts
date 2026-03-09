import {test , Page} from "@playwright/test"

export class Login{

page:Page

constructor(page:Page){

this.page = page

}

async loadurl()
{

    await this.page.goto("http://leaftaps.com/opentaps/control/main")

}

async enterUsername(username:string)
{

    await this.page.locator("#username").fill(username);
  
}
async enterPassword(password:string)
{
await this.page.locator("#password").fill(password);
 

}

async clickLogin()
{
    await this .page.locator(".decorativeSubmit").click();
  
}

}