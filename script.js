
var initial_input = '2600.63';
var country_code_input = 'US';
var state_code_input = 'TN';
var zip_input = '37013';
var apikey = 'QKWudEfSZugvqeNmmkYalHbxgd30E1lu'

$.getJSON("https://api.apilayer.com/tax_data/price?amount=" + initial_input + "&country=" + country_code_input + "&state=" + state_code_input + "&zip=" + zip_input + "&incil=false&apikey=" + apikey, 
    function(data){
    console.log(data)

    var initial_amount = data.price_excl_vat;
    $('.initial_amount').append(initial_amount);


    var final_amount = data.price_incl_vat;
    $('.final_amount').append(final_amount);


    var country_code = data.country_code;
    $('.country_code').append(country_code);


    var state_code = data.state;
    $('.state_code').append(state_code);


    var zip = data.zip;
    $('.zip').append(zip);


    var vrate = data.vat_rate * 100;
    $('.vrate').append(vrate);

});