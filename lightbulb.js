var fs =require("fs");

function fileread(filename)
{            
   var contents= fs.readFileSync(filename);
   return contents;
}
       
var data= fileread("case1.txt");

let inpt = data.toString();


const light_standard_consumption = 5;

list = inpt.split("\n");
is_trun_on = false;
total_comsumption =0;
turn_on_time = 0;
current_delta_value = 0;

for (var i = 0; i < list.length; i++) {	
	if(is_trun_on == true)
	{
		if(list[i].includes("TurnOff"))
		{			
			individual_values = list[i].split(" ");
			console.log("Light is off at : " + individual_values[0]);
			is_trun_on = false;
			time_diff_seconds = individual_values[0] - turn_on_time;
			time_diff_hrs = time_diff_seconds / 3600 ;
			delta_value = current_delta_value * light_standard_consumption;			
			if(time_diff_hrs != 0)	
			{
				total_comsumption = (delta_value * time_diff_hrs) + total_comsumption;	
			}
			console.log("Estimated energy used: " + total_comsumption + "Wh");
			continue;
		}
		if(list[i].includes("Delta"))
		{			
			individual_values = list[i].split(" ");
			console.log("Light modified at : " + individual_values[0]);			
			time_diff_seconds = individual_values[0] - turn_on_time;
			time_diff_hrs = time_diff_seconds / 3600 ;			
			delta_value = current_delta_value * light_standard_consumption;			
			if(time_diff_hrs != 0)	
			{
				total_comsumption = (delta_value * time_diff_hrs) + total_comsumption;	
			}
			else{
				total_comsumption = (delta_value * 1) + total_comsumption;
			}
			console.log("Estimated energy used: " + total_comsumption + "Wh");
			current_delta_value = individual_values[2];
			turn_on_time = individual_values[0];
			continue;
		}

	}

	if(list[i].includes("Delta"))
	{
		individual_values = list[i].split(" ");
		console.log("Light is on at  : " + individual_values[0]);
		turn_on_time = individual_values[0];
		is_trun_on = true;
		current_delta_value = individual_values[2];
		continue;
	}
}




