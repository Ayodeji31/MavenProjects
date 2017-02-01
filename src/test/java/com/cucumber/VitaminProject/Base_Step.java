package com.cucumber.VitaminProject;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class Base_Step {
	
	static WebDriver driver;

	public WebDriver getDriver(){
		if (driver == null){
			System.setProperty("Webdriver.Chromedriver", "C:\\chromedriver");
			driver = new ChromeDriver();
		}
		return driver;
	}


}
