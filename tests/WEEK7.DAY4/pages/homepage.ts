import { Login } from "./loginpage";

export class Home extends Login
{

async clickCRMSFA()
{
    await this.page.locator('text=CRM/SFA').click();
}


}