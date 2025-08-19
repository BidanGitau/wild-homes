import { eachDayOfInterval } from "date-fns";

/////////////
// GET

export async function getHouse(id) {
  const { data, error } = await supabase
    .from("houses")
    .select("*")
    .eq("id", id)
    .single();

  // For testing
  // await new Promise((res) => setTimeout(res, 1000));

  if (error) {
    console.error(error);
  }

  return data;
}

export async function getHousePrice(id) {
  const { data, error } = await supabase
    .from("houses")
    .select("regularPrice, discount")
    .eq("id", id)
    .single();

  if (error) {
    console.error(error);
  }

  return data;
}

export const getHouses = async function () {
  const { data, error } = await supabase
    .from("houses")
    .select("id, name, maxCapacity, regularPrice, discount, image, type")
    .order("name");

  if (error) {
    console.error(error);
    throw new Error("Houses could not be loaded");
  }

  return data;
};

// Tenants are uniquely identified by their email address
export async function getTenant(email) {
  const { data, error } = await supabase
    .from("tenants")
    .select("*")
    .eq("email", email)
    .single();

  // No error here! We handle the possibility of no tenant in the sign in callback
  return data;
}

export async function getRental(id) {
  const { data, error, count } = await supabase
    .from("rentals")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.error(error);
    throw new Error("Rental could not get loaded");
  }

  return data;
}

export async function getRentals(tenantId) {
  const { data, error, count } = await supabase
    .from("rentals")
    // We actually also need data on the houses as well. But let's ONLY take the data that we actually need, in order to reduce downloaded data.
    .select(
      "id, created_at, startDate, endDate, numMonths, numTenants, totalPrice, tenantId, houseId, houses(name, image)"
    )
    .eq("tenantId", tenantId)
    .order("startDate");

  if (error) {
    console.error(error);
    throw new Error("Rentals could not get loaded");
  }

  return data;
}

export async function getRentedDatesByHouseId(houseId) {
  let today = new Date();
  today.setUTCHours(0, 0, 0, 0);
  today = today.toISOString();

  // Getting all rentals
  const { data, error } = await supabase
    .from("rentals")
    .select("*")
    .eq("houseId", houseId)
    .or(`startDate.gte.${today},status.eq.checked-in`);

  if (error) {
    console.error(error);
    throw new Error("Rentals could not get loaded");
  }

  // Converting to actual dates to be displayed in the date picker
  const rentedDates = data
    .map((rental) => {
      return eachDayOfInterval({
        start: new Date(rental.startDate),
        end: new Date(rental.endDate),
      });
    })
    .flat();

  return rentedDates;
}

export async function getSettings() {
  const { data, error } = await supabase.from("settings").select("*").single();

  if (error) {
    console.error(error);
    throw new Error("Settings could not be loaded");
  }

  return data;
}

export async function getCountries() {
  try {
    const res = await fetch(
      "https://restcountries.com/v2/all?fields=name,flag"
    );
    const countries = await res.json();
    return countries;
  } catch {
    throw new Error("Could not fetch countries");
  }
}

/////////////
// CREATE

export async function createTenant(newTenant) {
  const { data, error } = await supabase.from("tenants").insert([newTenant]);

  if (error) {
    console.error(error);
    throw new Error("Tenant could not be created");
  }

  return data;
}

export async function createRental(newRental) {
  const { data, error } = await supabase
    .from("rentals")
    .insert([newRental])
    // So that the newly created object gets returned!
    .select()
    .single();

  if (error) {
    console.error(error);
    throw new Error("Rental could not be created");
  }

  return data;
}

/////////////
// UPDATE

// The updatedFields is an object which should ONLY contain the updated data
export async function updateTenant(id, updatedFields) {
  const { data, error } = await supabase
    .from("tenants")
    .update(updatedFields)
    .eq("id", id)
    .select()
    .single();

  if (error) {
    console.error(error);
    throw new Error("Tenant could not be updated");
  }
  return data;
}

export async function updateRental(id, updatedFields) {
  const { data, error } = await supabase
    .from("rentals")
    .update(updatedFields)
    .eq("id", id)
    .select()
    .single();

  if (error) {
    console.error(error);
    throw new Error("Rental could not be updated");
  }
  return data;
}

/////////////
// DELETE

export async function deleteRental(id) {
  const { data, error } = await supabase.from("rentals").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Rental could not be deleted");
  }
  return data;
}
