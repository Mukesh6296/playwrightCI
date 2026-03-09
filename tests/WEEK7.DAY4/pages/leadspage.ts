import {Home} from "./homepage"

export class Leads extends Home
{

    async createleadsButton()
    {
       await this.page.locator("//a[text()='Create Lead']") .click();
    }

}