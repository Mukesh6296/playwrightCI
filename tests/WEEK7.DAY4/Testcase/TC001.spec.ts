import {test} from "@playwright/test"
import {Leads} from "../pages/leadspage"

test("leaftapslogin", async ({ page }) => {

    let leadsobj = new Leads(page);
   await leadsobj.loadurl();
    await leadsobj.enterUsername("DemoSalesManager");
   await leadsobj.enterPassword("crmsfa")
    await leadsobj.clickLogin();
    await leadsobj.clickCRMSFA()
   await leadsobj.createleadsButton()

    
});

