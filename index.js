// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
 return drivers.filter(function(driver) {
   return driver.revenue > revenue 
 })
}

function driverNamesWithRevenueOver(drivers, revenue) {
 return driversWithRevenueOver(drivers, revenue).map(function(driver) {
   return driver.name
 })
}



function exactMatch(drivers, attribute) {
    const out = drivers.filter( function(driver) { return driver.name === attribute.name || driver.revenue === attribute.revenue })
    return out
}

function exactMatchToList (drivers, attribute) {
  return exactMatch(drivers, attribute) {
    
  }
}