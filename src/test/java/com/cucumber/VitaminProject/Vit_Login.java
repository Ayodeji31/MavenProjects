package com.cucumber.VitaminProject;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Vit_Login extends Base_Step{
	WebDriver driver = getDriver();
	
	
	@When("^I entered valid email address$")
	public void i_entered_valid_email_address() throws Throwable {
	  driver.findElement(By.id("email")).sendKeys("ayodejitester352@gmail.com"); 
	}

	@When("^I typed in correct password$")
	public void i_typed_in_correct_password() throws Throwable {
		driver.findElement(By.id("password")).sendKeys("Trustee#02");
	    
	}

	@When("^I clicked on Login button$")
	public void i_clicked_on_Login_button() throws Throwable {
		driver.findElement(By.id("loginBtn")).click();
	    
	}

	@Then("^I should be logged into my account$")
	public void i_should_be_logged_into_my_account() throws Throwable {
		String ExpecteMessage = "Welcome, Olukayode";
		String ActualMessage = driver.findElement(By.xpath("//*[@id='account']/div/div[1]/h1[1]")).getText();
		System.out.println(ActualMessage);
	   
	}

	@Then("^I logout$")
	public void i_logout() throws Throwable {
		driver.findElement(By.id("header-signout")).click();
	    
	}


}
