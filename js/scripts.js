// Start of load user ID
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const user_id = urlParams.get('id')
// End of load user ID

// Start of country
country=["Afghanistan",
"Aland Islands",
"Albania",
"Algeria",
"American Samoa",
"Andorra",
"Angola",
"Anguilla",
"Antarctica",
"Antigua and Barbuda",
"Argentina",
"Armenia",
"Aruba",
"Australia",
"Austria",
"Azerbaijan",
"Bahamas",
"Bahrain",
"Bangladesh",
"Barbados",
"Belarus",
"Belgium",
"Belize",
"Benin",
"Bermuda",
"Bhutan",
"Bolivia",
"Bosnia and Herzegovina",
"Botswana",
"Bouvet Island",
"Brazil",
"British Virgin Islands",
"British Indian Ocean Territory",
"Brunei Darussalam",
"Bulgaria",
"Burkina Faso",
"Burundi",
"Cambodia",
"Cameroon",
"Canada",
"Cape Verde",
"Cayman Islands",
"Central African Republic",
"Chad",
"Chile",
"China",
"Hong Kong, SAR China",
"Macao, SAR China",
"Christmas Island",
"Colombia",
"Comoros",
"Democratic Republic of the Congo",
"Cook Islands",
"Costa Rica",
"Cote d'Ivoire",
"Croatia",
"Cuba",
"Cyprus",
"Czech Republic",
"Denmark",
"Djibouti",
"Dominica",
"Dominican Republic",
"Ecuador",
"Egypt",
"El Salvador",
"Equatorial Guinea",
"Eritrea",
"Estonia",
"Ethiopia",
"Faroe Islands",
"Fiji",
"Finland",
"France",
"French Guiana",
"French Polynesia",
"French Southern Territories",
"Gabon",
"Gambia",
"Georgia",
"Germany",
"Ghana",
"Gibraltar",
"Greece",
"Greenland",
"Grenada",
"Guadeloupe",
"Guam",
"Guatemala",
"Guernsey",
"Guinea",
"Guinea-Bissau",
"Guyana",
"Haiti",
"Honduras",
"Hungary",
"Iceland",
"India",
"Indonesia",
"Iran, Islamic Republic of",
"Iraq",
"Ireland",
"Isle of Man",
"Israel",
"Italy",
"Jamaica",
"Japan",
"Jersey",
"Jordan",
"Kazakhstan",
"Kenya",
"Kiribati",
"Korea (North)",
"Korea (South)",
"Kuwait",
"Kyrgyzstan",
"Lao PDR",
"Latvia",
"Lebanon",
"Lesotho",
"Liberia",
"Libya",
"Liechtenstein",
"Lithuania",
"Luxembourg",
"Macedonia, Republic of",
"Madagascar",
"Malawi",
"Malaysia",
"Maldives",
"Mali",
"Malta",
"Marshall Islands",
"Martinique",
"Mauritania",
"Mauritius",
"Mayotte",
"Mexico",
"Micronesia, Federated States of",
"Moldova",
"Monaco",
"Mongolia",
"Montenegro",
"Montserrat",
"Morocco",
"Mozambique",
"Myanmar",
"Namibia",
"Nauru",
"Nepal",
"Netherlands",
"Netherlands Antilles",
"New Caledonia",
"New Zealand",
"Nicaragua",
"Niger",
"Nigeria",
"Northern Mariana Islands",
"Norway",
"Oman",
"Pakistan",
"Palau",
"Palestinian Territory",
"Panama",
"Papua New Guinea",
"Paraguay",
"Peru",
"Philippines",
"Pitcairn",
"Poland",
"Portugal",
"Puerto Rico",
"Qatar",
"Romania",
"Russian Federation",
"Rwanda",
"Saint-Barthélemy",
"Saint Helena",
"Saint Kitts and Nevis",
"Saint Lucia",
"Saint-Martin (French part)",
"Saint Pierre and Miquelon",
"Saint Vincent and Grenadines",
"Samoa",
"San Marino",
"Sao Tome and Principe",
"Saudi Arabia",
"Senegal",
"Serbia",
"Seychelles",
"Sierra Leone",
"Singapore",
"Slovakia",
"Slovenia",
"Solomon Islands",
"Somalia",
"South Africa",
"South Sudan",
"Spain",
"Sri Lanka",
"Sudan",
"Suriname",
"Swaziland",
"Sweden",
"Switzerland",
"Syrian Arab Republic (Syria)",
"Taiwan, Republic of China",
"Tajikistan",
"Tanzania, United Republic of",
"Thailand",
"Timor-Leste",
"Togo",
"Tokelau",
"Tonga",
"Trinidad and Tobago",
"Tunisia",
"Turkey",
"Turkmenistan",
"Turks and Caicos Islands",
"Tuvalu",
"Uganda",
"Ukraine",
"United Arab Emirates",
"United Kingdom",
"United States of America",
"Uruguay",
"Uzbekistan",
"Vanuatu",
"Venezuela (Bolivarian Republic)",
"Viet Nam",
"Virgin Islands, US",
"Yemen",
"Zambia",
"Zimbabwe",
];

country_code=["AFG",
"ALA",
"ALB",
"DZA",
"ASM",
"AND",
"AGO",
"AIA",
"ATA",
"ATG",
"ARG",
"ARM",
"ABW",
"AUS",
"AUT",
"AZE",
"BHS",
"BHR",
"BGD",
"BRB",
"BLR",
"BEL",
"BLZ",
"BEN",
"BMU",
"BTN",
"BOL",
"BIH",
"BWA",
"BVT",
"BRA",
"VGB",
"IOT",
"BRN",
"BGR",
"BFA",
"BDI",
"KHM",
"CMR",
"CAN",
"CPV",
"CYM",
"CAF",
"TCD",
"CHL",
"CHN",
"HKG",
"MAC",
"CXR",
"COL",
"COM",
"COD",
"COK",
"CRI",
"CIV",
"HRV",
"CUB",
"CYP",
"CZE",
"DNK",
"DJI",
"DMA",
"DOM",
"ECU",
"EGY",
"SLV",
"GNQ",
"ERI",
"EST",
"ETH",
"FRO",
"FJI",
"FIN",
"FRA",
"GUF",
"PYF",
"ATF",
"GAB",
"GMB",
"GEO",
"DEU",
"GHA",
"GIB",
"GRC",
"GRL",
"GRD",
"GLP",
"GUM",
"GTM",
"GGY",
"GIN",
"GNB",
"GUY",
"HTI",
"HND",
"HUN",
"ISL",
"IND",
"IDN",
"IRN",
"IRQ",
"IRL",
"IMN",
"ISR",
"ITA",
"JAM",
"JPN",
"JEY",
"JOR",
"KAZ",
"KEN",
"KIR",
"PRK",
"KOR",
"KWT",
"KGZ",
"LAO",
"LVA",
"LBN",
"LSO",
"LBR",
"LBY",
"LIE",
"LTU",
"LUX",
"MKD",
"MDG",
"MWI",
"MYS",
"MDV",
"MLI",
"MLT",
"MHL",
"MTQ",
"MRT",
"MUS",
"MYT",
"MEX",
"FSM",
"MDA",
"MCO",
"MNG",
"MNE",
"MSR",
"MAR",
"MOZ",
"MMR",
"NAM",
"NRU",
"NPL",
"NLD",
"ANT",
"NCL",
"NZL",
"NIC",
"NER",
"NGA",
"MNP",
"NOR",
"OMN",
"PAK",
"PLW",
"PSE",
"PAN",
"PNG",
"PRY",
"PER",
"PHL",
"PCN",
"POL",
"PRT",
"PRI",
"QAT",
"ROU",
"RUS",
"RWA",
"BLM",
"SHN",
"KNA",
"LCA",
"MAF",
"SPM",
"VCT",
"WSM",
"SMR",
"STP",
"SAU",
"SEN",
"SRB",
"SYC",
"SLE",
"SGP",
"SVK",
"SVN",
"SLB",
"SOM",
"ZAF",
"SSD",
"ESP",
"LKA",
"SDN",
"SUR",
"SWZ",
"SWE",
"CHE",
"SYR",
"TWN",
"TJK",
"TZA",
"THA",
"TLS",
"TGO",
"TKL",
"TON",
"TTO",
"TUN",
"TUR",
"TKM",
"TCA",
"TUV",
"UGA",
"UKR",
"ARE",
"GBR",
"USA",
"URY",
"UZB",
"VUT",
"VEN",
"VNM",
"VIR",
"YEM",
"ZMB",
"ZWE",
];


setTimeout(function() {
var search_box = document.getElementById("country_search"); 
var c = new Awesomplete(search_box, {list: country});
    document.getElementById('country_search').addEventListener('awesomplete-selectcomplete',async function(){
    // We do these steps after someone clicks on search bar
    var a = country.indexOf(document.getElementById("country_search").value); //find index of the selected store
    document.getElementById(country_code[a]).checked = true 
    c.close();
    c.close();
    c.close();
    c.close();
    c.close();
    c.close();
    c.close();
    c.close();
    c.close();

    // Load countries in table on click
    prep_table()

});

var search_box_fuels = document.getElementById("country_search_fuels"); 
var c2 = new Awesomplete(search_box_fuels, {list: country});
    document.getElementById('country_search_fuels').addEventListener('awesomplete-selectcomplete',async function(){
    // We do these steps after someone clicks on search bar
    var a = country.indexOf(document.getElementById("country_search_fuels").value); //find index of the selected store
    document.getElementById("fuels_"+country_code[a]).checked = true 
    c2.close();
    c2.close();
    c2.close();
    c2.close();
    c2.close();
    c2.close();
    c2.close();
    c2.close();
    c2.close();

    // Load countries in table on click
    prep_table()

});  
}, 1000);


function countries(){
 setTimeout(function() {
    for (let i = 0; i < country.length; i++) {
    // Loop through stores in list and create checkboxs
    var checkbox = document.createElement('input');
	checkbox.type = "checkbox";
	checkbox.value = i.toString();
	checkbox.id = country_code[i];
	
	// load table on checkbox click
	checkbox.classList.add("country_chbx");
	checkbox.onclick = function(){prep_table()};

	var label = document.createElement('label')
	var t_span=document.createElement('span');
	t_span.innerHTML=country[i] + "<span class='close'>  X  </span>";
	label.appendChild(checkbox);
	label.appendChild(t_span)
	var cont = document.createElement('div')
	cont.id="ck-button";
	cont.appendChild(label)
	document.getElementById("country_chbx").appendChild(cont)
} 
}, 1);
}

function countries_fuel(){
 setTimeout(function() {
    for (let i = 0; i < country.length; i++) {
    // Loop through stores in list and create checkboxs
    var checkbox = document.createElement('input');
	checkbox.type = "checkbox";
	checkbox.value = i.toString();
	checkbox.id = "fuels_"+country_code[i];
	
	// load table on checkbox click
	checkbox.classList.add("country_chbx2");
	checkbox.onclick = function(){prep_table()};

	var label = document.createElement('label')
	var t_span=document.createElement('span');
	t_span.innerHTML=country[i] + "<span class='close'>  X  </span>";
	label.appendChild(checkbox);
	label.appendChild(t_span)
	var cont = document.createElement('div')
	cont.id="ck-button";
	cont.appendChild(label)
	document.getElementById("country_chbx2").appendChild(cont)
} 
}, 1);
}

countries();
countries_fuel();

// End of country


var checkbox = document.querySelector("input[name=chx_other]");

checkbox.addEventListener('change', function() {
  if (this.checked) {
  	document.getElementById("other_chx").style.display="inline-block"

  } else {
  	document.getElementById("other_chx").style.display="none"
  }
});

var stove_types=[
'Solar cooker (thermal energy, not solar panels)',
'Electric stove, resistive',
'Electric stove, inductive',
'Electric cooker (multi-use pressure cooker)',
'Piped natural gas stove',
'Biogas stove',
'LPG/cooking gas stove',
'Manufactured portable solid-fuel stove',
'Artisan-crafted portable solid-fuel stove',
'Manufactured stationary solid-fuel stove',
'Artisan-crafted stationary stove',
'Liquid/gel fuel stove',
'Other'
];

var stove_id = [
'solar',
'elec_res',
'elec_ind',
'elec_coo',
'nat_gas',
'biogas',
'lpg',
'mps',
'aps',
'mss',
'art',
'liq',
'oth'
];

var stove_attributes = [
'Chimney',
'Natural-draft',
'Forced-draft',
'Top-lit updraft',
'Rocket combustion chamber',
'Multiple pot rests',
'Sunken pot/pot skirt',
'Don\'t know details'
];

var tiers = [
'Emissions',
'Efficieny',
'Indoor Emissions',
'Safety',
'Durability'
];

var array_fuels = [
'Alcohol/ethanol',
'Gasoline/diesel (not in generator)',
'Kerosene/paraffin',
'Coal/lignite briquettes/pellets',
'Charcoal briquettes/pellets',
'Wood',
'Biomass pellets/briquettes',
'Woodchips',
'Sawdust',
'Liquified petroleum gas/cooking gas',
'Other'
];

var fuels_code = [
'alc',
'gas',
'ker',
'coa',
'cha',
'woo',
'pel',
'chi',
'dus',
'f_lpg',
'f_oth'
];


var array_country_status =[];
var array_stove_type =[];

for (var i = 0; i < country.length; i++) {
  array_country_status.push(false);
}

for (var i = 0; i < 13; i++) {
  array_stove_type.push(false);
}

function prep_table(){
	// Going through and determing what countries the group works in
	var array_country_status =[];
	var checked_true = document.getElementsByClassName('country_chbx');
	for(var index=0;index < checked_true.length;index++){
		if(checked_true[index].checked){
			temp = true;
		}	
		else {
			temp = false;
		}
      array_country_status.push(temp)
   }

   // Going through and determing what stove types the group sells
   	var array_stove_type =[];
	var checked_true = document.getElementsByClassName('stove_type_chx');
	for(var index=0;index < checked_true.length;index++){
		if(checked_true[index].checked){
			temp = true;
		}	
		else {
			temp = false;
		}
      array_stove_type.push(temp)
   }

   	// Going through and determing what countries the group sells fuels
	var array_country_status_fuels =[];
	var checked_true = document.getElementsByClassName('country_chbx2');
	for(var index=0;index < checked_true.length;index++){
		if(checked_true[index].checked){
			temp = true;
		}	
		else {
			temp = false;
		}
      array_country_status_fuels.push(temp)
   }

   	// Going through and determing what countries the group sells fuels
	var array_fuel =[];
	var checked_true = document.getElementsByClassName('fuels_chbx');
	for(var index=0;index < checked_true.length;index++){
		if(checked_true[index].checked){
			temp = true;
		}	
		else {
			temp = false;
		}
      array_fuel.push(temp)
   }

   // Only show countries under cookstove type if both are true
   if (array_stove_type.includes(true)){document.getElementById("no_stove_sales").style.display="none"}
   	else {document.getElementById("no_stove_sales").style.display="block"}
   for (let i = 0; i < array_stove_type.length; i++) {
   	for (let j = 0; j < array_country_status.length; j++) {
   		if(array_country_status[j] && array_stove_type[i]){
   			document.getElementById("label_"+stove_id[i]+"_"+country_code[j]).style.display="block"
   			document.getElementById("label_sales_"+stove_id[i] + "_" + country_code[j]).style.display="block"
   			
   		}
   		else {
   			document.getElementById("label_"+stove_id[i]+"_"+country_code[j]).style.display="none";
			document.getElementById("label_sales_"+stove_id[i] + "_" + country_code[j]).style.display="none"
   			document.getElementById(stove_id[i]+"_"+country_code[j]).checked=false;	
   			document.getElementById("sales_"+stove_id[i] + "_" + country_code[j]).value=""
   		}
   	}
   	if (array_stove_type[i]){
   		document.getElementById("tr_"+stove_id[i]).style.display=""
   	}
   	else {
   		document.getElementById("tr_"+stove_id[i]).style.display="none"
   	}
   }

    if (array_fuel.includes(true)){document.getElementById("no_fuel_sales").style.display="none"}
   	else {document.getElementById("no_fuel_sales").style.display="block"}




   for (let i = 0; i < array_fuel.length; i++) {
   	for (let j = 0; j < array_country_status_fuels.length; j++) {
   	if(array_country_status_fuels[j] && array_fuel[i]){
   			document.getElementById("label_"+fuels_code[i]+"_"+country_code[j]).style.display="block"
   		}
   		else {
   			document.getElementById("label_"+fuels_code[i]+"_"+country_code[j]).style.display="none"
   			document.getElementById(fuels_code[i]+"_"+country_code[j]).checked=false;
   			document.getElementById("amount_sold_"+fuels_code[i]+"_"+country_code[j]).value="";	
   		}
   	}
   	if (array_fuel[i]){
   	document.getElementById("tr_"+fuels_code[i]).style.display=""
   	}
   	else {
   	document.getElementById("tr_"+fuels_code[i]).style.display="none"
   	}
   }

   // Pass this information to the table

 

}
createtable()

function createtable() {
    // array_country_status = country_status;
    // array_stove_type = stove_status;
    // array_country_status_fuels = country_status_fuel;
    // array_fuel = app_fuels;
    console.log("create table was run")
    var tableBody = document.getElementById("stove_info_table_body")
    tableBody.innerHTML = ""
    // Create rows for each stove type
    for (let i = 0; i < stove_types.length; i++) {
        // if (array_stove_type[i]) {
            // Creating a row if that stove type is sold
            var tr = document.createElement('TR');
            tr.style.display="none"
            tr.id = "tr_"+stove_id[i];
            tableBody.appendChild(tr);
            var td1 = document.createElement('TD');
            td1.appendChild(document.createTextNode(stove_types[i]));
            tr.appendChild(td1);

            // Adding the applicable countries
            var td2 = document.createElement('TD');
            td2.appendChild(document.createElement('div'))
            for (let j = 0; j < country.length; j++) {
                // if (array_country_status[j]) {
                    var checkbox = document.createElement('input');
                    checkbox.type = "checkbox";
                    checkbox.value = j.toString();
                    checkbox.id = stove_id[i] + "_" + country_code[j];

                    var label = document.createElement('label')
                    label.id = "label_"+stove_id[i] + "_" + country_code[j];
                    label.classList.add('in_table');
                    var t_span = document.createElement('span');
                    t_span.innerHTML = country[j];
                    label.appendChild(checkbox);
                    label.appendChild(t_span)
                    td2.appendChild(label)
                // }
             }
            tr.appendChild(td2);

            var td3 = document.createElement('TD');
            td3.appendChild(document.createElement('div'))
            for (let j = 0; j < country.length; j++) {
                // if (array_country_status[j]) {
                    var checkbox = document.createElement('input');
                    checkbox.type = "number";
                    checkbox.id = "sales_"+stove_id[i] + "_" + country_code[j];
                    checkbox.placeholder = "# Sold in "+country[j]
                    var label = document.createElement('label')
                    label.id = "label_sales_"+stove_id[i] + "_" + country_code[j];
                    label.classList.add('in_table');
                    label.appendChild(checkbox);
                    td3.appendChild(label)
                // }
             }
            tr.appendChild(td3);

            // Adding list of possible attributes
            var td4 = document.createElement('TD');
            td4.appendChild(document.createElement('div'))
            for (let k = 0; k < stove_attributes.length; k++) {
                var checkbox = document.createElement('input');
                checkbox.type = "checkbox";
                checkbox.value = k.toString();
                checkbox.id = stove_id[i] + "_" + stove_attributes[k];

                var label = document.createElement('label')
                label.classList.add('in_table');
                var t_span = document.createElement('span');
                t_span.innerHTML = stove_attributes[k];
                label.appendChild(checkbox);
                label.appendChild(t_span)
                td4.appendChild(label)
            }
            tr.appendChild(td4)

            // Adding tiers
            var td5 = document.createElement('TD');
            td5.appendChild(document.createElement('div'))
            var values = ["N/A", "Tier 0", "Tier 1", "Tier 2", "Tier 3", "Tier 4"];
            for (let l = 0; l < tiers.length; l++) {
                var select = document.createElement("select");
                select.name = stove_id[i] + "_" + tiers[l];
                select.id = stove_id[i] + "_" + tiers[l]
                for (const val of values) {
                    var option = document.createElement("option");
                    option.value = val;
                    option.text = val.charAt(0).toUpperCase() + val.slice(1);
                    select.appendChild(option);
                }
                var label = document.createElement('label')
                label.classList.add('in_table');
                var t_span = document.createElement('span');
                t_span.innerHTML = tiers[l];
                label.appendChild(select);
                label.appendChild(t_span)
                td5.appendChild(label)
            }
            tr.appendChild(td5)
        // } //Close of loop determining if cookstove is there
    } //Close of stove loop

  
    var tableBody = document.getElementById("fuel_sales_body")
    tableBody.innerHTML = ""
    for (let i = 0; i < array_fuels.length; i++) {
    	// if (array_fuel[i]) {
    		// Creating a row if fuels are sold in a country
            var tr = document.createElement('TR');
            tr.style.display="none"
            tr.id = "tr_"+fuels_code[i];
            tableBody.appendChild(tr);
            var td1 = document.createElement('TD');
            td1.appendChild(document.createTextNode(array_fuels[i]));
            tr.appendChild(td1);

            var td4 = document.createElement('TD');
            td4.appendChild(document.createElement('div'))
            for (let j = 0; j < country.length; j++) {
                // if (array_country_status[j]) {
                    var checkbox = document.createElement('input');
                    checkbox.type = "checkbox";
                    checkbox.value = j.toString();
                    checkbox.id = fuels_code[i] + "_" + country_code[j];

                    var label = document.createElement('label')
                    label.id = "label_"+fuels_code[i] + "_" + country_code[j];
                    label.classList.add('in_table');
                    var t_span = document.createElement('span');
                    t_span.innerHTML = country[j]+": ";
                    label.appendChild(checkbox);
                    label.appendChild(t_span)

                    var checkbox = document.createElement('input');
			        checkbox.id = "amount_sold_" + fuels_code[i] + "_" + country_code[j];
			        checkbox.type = "number";
			        checkbox.placeholder = "Quantity sold"
			        label.appendChild(checkbox);

			        var values = ["","kg","Litre","pound"];
                	var select = document.createElement("select");
                	select.name = country_code[j]+"_sales_unit_" + fuels_code[i];
                	select.id = country_code[j]+"_sales_unit_" + fuels_code[i];
                	for (const val of values) {
                    	var option = document.createElement("option");
                    	option.value = val;
                    	option.text = val.charAt(0).toUpperCase() + val.slice(1);
                    	select.appendChild(option);
                		}
                	label.appendChild(select);
                	td4.appendChild(label)
                // }
             }
            tr.appendChild(td4);



    	}
    // }
} //close of createtable function

setTimeout(function() {
    prep_table();
}, 100);

// End of creating stove type rows




function fueloptions(){
 setTimeout(function() {
    for (let i = 0; i < array_fuels.length; i++) {
    // Loop through stores in list and create checkboxs
    var checkbox = document.createElement('input');
	checkbox.type = "checkbox";
	checkbox.value = i.toString();
	checkbox.id = fuels_code[i];
	
	// load table on checkbox click
	checkbox.classList.add("fuels_chbx");
	checkbox.onclick = function(){prep_table()};

	var label = document.createElement('label')
	label.classList.add('in_table');
	var t_span=document.createElement('span');
	t_span.innerHTML=array_fuels[i];
	label.appendChild(checkbox);
	label.appendChild(t_span)
	document.getElementById("fuels_select").appendChild(label)
} 
}, 1);
}

fueloptions();


function currency_change(event) {

  // skip for arrow keys
  if(event.which >= 37 && event.which <= 40) return;

  // format number
  $(this).val(function(index, value) {
    return value
    .replace(/\D/g, "")
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    ;
  });
};

async function save_values(){
input_ids=[];
input_vals=[];
all_inputs = document.getElementsByTagName("input");

 for (let i = 0; i < all_inputs.length; i++) {
  if (all_inputs[i].type=="checkbox") {
    if(all_inputs[i].checked){
      input_ids.push(all_inputs[i].id)
      input_vals.push("true")
    }
  }
  else {
    if(all_inputs[i].value!==""&&all_inputs[i].id!=="country_search"&&all_inputs[i].id!=="country_search_fuels"){
      input_ids.push(all_inputs[i].id)
      input_vals.push(all_inputs[i].value)
    }
  }
 }

var inputs_select = document.getElementsByTagName("select");
for (let i = 0; i < inputs_select.length; i++) {
  if(inputs_select[i].value!=="N/A"&&inputs_select[i].value!==""){
      input_ids.push(inputs_select[i].id)
      input_vals.push(inputs_select[i].value)
  }
}


const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}

var myObj = new Parse.Object('cca_survey2');
for (let i = 0; i < input_ids.length; i++) {
await sleep(30)
console.log(i)
myObj.set(input_ids[i],input_vals[i])
}
myObj.set("user_id",user_id)
setTimeout(function() {
myObj.save();  //Send data to server
}, 3000);

}


async function set_values(){
  const query = new Parse.Query("cca_survey2"); //Connect to server
  query.equalTo("user_id", user_id);
  query.descending("updatedAt");
  query.limit(1);
  results = await query.find();

  k = Object.keys(results[0].attributes)

  all_inputs = document.getElementsByTagName("input");
  for (let i = 0; i < all_inputs.length; i++) {
    if (all_inputs[i].type=="checkbox" && k.includes(all_inputs[i].id)) {
      document.getElementById(all_inputs[i].id).checked=true;
      console.log("was true")
    }
    else if(k.includes(all_inputs[i].id)){
      l=k.indexOf(all_inputs[i].id)
      results[0].get(k[l])
      document.getElementById(all_inputs[i].id).value=results[0].get(k[l]);
    }
 }

inputs_select = document.getElementsByTagName("select");
for (let i = 0; i < inputs_select.length; i++) {
  if(k.includes(inputs_select[i].id)){
    l=k.indexOf(inputs_select[i].id)
    console.log(i)
      document.getElementById(inputs_select[i].id).value=results[0].get(k[l]);
 }
}

setTimeout(function() {prep_table()}, 3000);
}

function load(){
  setTimeout(function() {
  set_values()
}, 1000);
}

load();

