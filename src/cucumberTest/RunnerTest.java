package cucumberTest;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;


@RunWith(Cucumber.class)
@CucumberOptions(
		format = {"pretty", "html:target"},
		features = "Feature",
		glue={"step_definition"},
		tags = {"@search, @checkout"}
		)

public class RunnerTest {

}
