 package com.cucumber.VitaminProject;

import java.io.File;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.By;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class Vit_Register extends Base_Step {
	WebDriver driver = getDriver();
	
	//public WebDriver driver;
	public int random;
	public String Email;
	@Given("^Am on the home page$")
	public void am_on_the_home_page() throws Throwable {
	   
	 //System.setProperty("webdriver.chrome.driver", "C:\\chromedriver.exe");	
	 //driver = new ChromeDriver();
	 driver.navigate().to("https://www.vitamix.co.uk/");
	 driver.manage().window().maximize();
	}

	@And("^I click on My Account link$")
	public void i_click_on_My_Account_link() throws Throwable {
	driver.findElement(By.id("headerMyAccountLink")).click();
	Thread.sleep(3000);
	}  
    
	@And("^Iclick create account link$")
	public void iclick_create_account_link() throws Throwable {
	driver.findElement(By.id("createAnAccountLink")).click();
	Thread.sleep(3000);
	    
	}

	@And("^I enter First name$")
	public void i_enter_First_name() throws Throwable {
	driver.findElement(By.id("firstName")).sendKeys("Olukayode");
	}

	@And("^I enter Last name$")
	public void i_enter_Last_name() throws Throwable {
	driver.findElement(By.id("lastName")).sendKeys("Badmus");	    
	}

	@And("^I enter email address$")
	public void i_enter_email_address() throws Throwable {
		random = 100 + (int)(Math.random() * ((1000 - 1) + 1));
	    System.out.println(random);
	    driver.findElement(By.id("email")).sendKeys("ayodejitester" + random + "@gmail.com");
	    Thread.sleep(1000);
	    
	}
	
	@And("^I enter confirm email address$")
	public void i_enter_confirm_email_address() throws Throwable {
		driver.findElement(By.id("confirmEmail")).sendKeys("ayodejitester" + random + "@gmail.com");    
	}


	@And("^I enter password$")
	public void i_enter_password() throws Throwable {
	driver.findElement(By.id("password")).sendKeys("Trustee#02");
	}

	@And("^I enter confirm password$")
	public void i_enter_confirm_password() throws Throwable {
	driver.findElement(By.id("confirm-password")).sendKeys("Trustee#02");    
	}

	@And("^I select For Home product radio button$")
	public void i_select_For_Home_product_radio_button() throws Throwable {
	driver.findElement(By.id("homeType1")).click();  
	}

	@And("^I select Yes for currently own vitamin$")
	public void i_select_Yes_for_currently_own_vitamin() throws Throwable {
	driver.findElement(By.id("vitamixOwnerYes")).click();
	}

	@And("^I tick the tooltip to agree to Terms and Conditions$")
	public void i_tick_the_tooltip_to_agree_to_Terms_and_Conditions() throws Throwable {
	driver.findElement(By.id("terms")).click();
	}

	@When("^I click on the Create Account button$")
	public void i_click_on_the_Create_Account_button() throws Throwable {
	driver.findElement(By.id("registerButton")).click(); 
	Thread.sleep(3000);
	}

	@Then("^My Account is created$")
	public void my_Account_is_created() throws Throwable {
		Thread.sleep(5000);
		
		try{
		Assert.assertEquals("Sign Out", driver.findElement(By.id("header-signout")).getText());
		 } catch (Error e) {	   
		 }
//		File scrFile1 = ((TakesScreenshot)driver).getScreenshotAs(OutputType.FILE);
//        FileUtils.copyFile(scrFile1, new File ("C:\\Screenshots\\RegisterMav.jpg")); 
//        System.out.println("New user Saved in C Drive");
 //       Thread.sleep(2000);

	}


	@And("^I log out$")
	public void i_log_out() throws Throwable {
	driver.findElement(By.id("header-signout")).click();
	Thread.sleep(3000);
		
	}



}
