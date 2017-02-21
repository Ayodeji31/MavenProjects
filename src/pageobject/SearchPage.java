package pageobject;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class SearchPage {
	
	WebDriver driver;
	
	@FindBy(how=How.ID, using ="paginationOverlay")
	public static WebElement Message_displayed;
	
	
	public void Search_Message_displayed(){
		Message_displayed.isDisplayed();	
	}

}
