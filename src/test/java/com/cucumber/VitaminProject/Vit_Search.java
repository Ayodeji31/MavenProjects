package com.cucumber.VitaminProject;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Vit_Search extends Base_Step{
	
	WebDriver driver = getDriver();
	
	@When("^I enter diferent \"([^\"]*)\" in the search field$")
	public void i_enter_diferent_in_the_search_field(String Product) throws Throwable {
		driver.findElement(By.id("SearchTextGlobal")).sendKeys(Product);
	    
	}

	@When("^I click search Icon$")
	public void i_click_search_Icon() throws Throwable {
		driver.findElement(By.id("searchButton")).click();

	}

	@Then("^search result should be displayed\\.$")
	public void search_result_should_be_displayed() throws Throwable {
		String ExpectedMessage = "Search Results";
		String ActualMessage = driver.findElement(By.xpath("//*[@id='search']/div/div/h1")).getText();
		System.out.println(ActualMessage);
	  
	}



}
