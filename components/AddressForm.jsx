import React, { useEffect,useState } from 'react';
import { useDispatch } from 'react-redux';
import { setAddress } from '../store/addressSlice';


function AddressForm() {
  let autocomplete;
  let address1Field;
  let address2Field;
  let postalField;

  const dispatch = useDispatch();
  


  useEffect(() => {
    address1Field = document.querySelector("#ship-address");
    address2Field = document.querySelector("#address2");
    postalField = document.querySelector("#postcode");

    const initAutocomplete = () => {
      // Create the autocomplete object, restricting the search predictions to
      // addresses in the US and Canada.
      autocomplete = new window.google.maps.places.Autocomplete(address1Field, {
        componentRestrictions: { country: ["us", "ca"] },
        fields: ["address_components", "geometry"],
        types: ["address"],
      });
      address1Field.focus();
      autocomplete.addListener("place_changed", fillInAddress);
    };

    const fillInAddress = () => {
      
      const place = autocomplete.getPlace();
      let address1 = "";
      let postcode = "";

      for (const component of place.address_components) {
        const componentType = component.types[0];

        switch (componentType) {
          case "street_number": {
            address1 = `${component.long_name} ${address1}`;
            break;
          }
          case "route": {
            address1 += component.short_name;
            break;
          }
          case "postal_code": {
            postcode = `${component.long_name}${postcode}`;
            break;
          }
          case "postal_code_suffix": {
            postcode = `${postcode}-${component.long_name}`;
            break;
          }
          case "locality":
            document.querySelector("#locality").value = component.long_name;
            break;
          case "administrative_area_level_1": {
            document.querySelector("#state").value = component.short_name;
            break;
          }
          case "country":
            document.querySelector("#country").value = component.long_name;
            break;
        }
      }

      address1Field.value = address1;
      postalField.value = postcode;
      address2Field.focus();
    };

    window.initAutocomplete = initAutocomplete;
    // Load the Google Maps API script with the initAutocomplete callback
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyA7xcrbQDMO-RuvqmXsQ0EvD4FtrJWDTPE&callback=initAutocomplete&libraries=places&v=weekly`;
    script.defer = true;
    document.head.appendChild(script);

    return () => {
      // Clean up by removing the script when the component unmounts
      document.head.removeChild(script);
    };
  }, []);



  const handleSaveAddress = () => {
    // Create an object with the address details
    const address = {
      deliverTo: address1Field.value,
      apartment: address2Field.value,
      city: document.querySelector("#locality").value,
      state: document.querySelector("#state").value,
      postalCode: postalField.value,
      country: document.querySelector("#country").value,
    };

    // Dispatch the setAddress action
    dispatch(setAddress(address));

    
  };



  

  return (
    <div>
      <form id="address-form " className='flex flex-col p-2 w-full' action="" method="get" autoComplete="off">
        <label className="full-field flex flex-col gap-1">
          <span className="form-label text-lg font-semibold">Deliver to *</span>
          <input
            id="ship-address"
            name="ship-address"
            required
            autoComplete="off"
            className='border p-2 rounded-md text-sm'
            placeholder='enter your location'
          />
        </label>
        <label className="full-field text-lg font-semibold flex flex-col gap-1">
          <span className="form-label">Apartment, unit, suite, or floor # *</span>
          <input id="address2" name="address2" className='border p-2 rounded-md' placeholder=''  required/>
        </label>
        <label className="full-field flex flex-col gap-1">
          <span className="form-label">City*</span>
          <input id="locality" name="locality" required className='border p-2 rounded-md' />
        </label>
        <label className="slim-field-left flex flex-col gap-1">
          <span className="form-label">State/Province*</span>
          <input id="state" name="state" required className='border p-2 rounded-md' />
        </label>
        <label className="slim-field-right flex flex-col gap-1" htmlFor="postal_code">
          <span className="form-label">Postal code*</span>
          <input id="postcode" name="postcode" required className='border p-2 rounded-md' />
        </label>
        <label className="full-field">
          <span className="form-label flex flex-col gap-1">Country/Region*</span>
          <input id="country" name="country" required className='border p-2 rounded-md' />
        </label>
        <div className='flex mt-3 gap-4 flex-col lg:flex-row'>

        <button type="button" className="my-button px-10 py-3.5 w-full bg-gradient-to-bl from-secondaryColor to-thirdColor text-white text-center rounded-md shadow-xl block sm:w-auto font-semibold " 
        onClick={handleSaveAddress}
        >Use this Address</button>
        <input type="reset" value="Clear form" className='border-2 p-4 rounded-md font-semibold cursor-pointer'/>
        </div>
      </form>
      {/* <img
        className="powered-by-google"
        src="https://storage.googleapis.com/geo-devrel-public-buckets/powered_by_google_on_white.png"
        alt="Powered by Google"
      /> */}
    </div>
  );
}

export default AddressForm;
