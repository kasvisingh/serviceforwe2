"use strict";


var eventDates = ["July 29, 2018 11:00:00", "July 30, 2018 19:00:00", "July 31, 2018 19:30:00", 
                 "August 2, 2018 19:00:00", "August 3, 2018 20:00:00", "August 4, 2018 19:30:00", 
                 "August 5, 2018 11:00:00", "August 6, 2018 19:00:00", "August 8, 2018 19:00:00", 
                 "August 9, 2018 19:30:00", "August 10, 2018 19:30:00", "August 11, 2018 19:30:00", 
                 "August 12, 2018 11:00:00", "August 14, 2018 19:00:00", "August 15, 2018 19:30:00", 
                 "August 16, 2018 19:30:00", "August 17, 2018 19:30:00", "August 18, 2018 19:30:00", 
                 "August 19, 2018 11:00:00", "August 20, 2018 19:00:00", "August 22, 2018 18:00:00", 
                 "August 23, 2018 19:00:00", "August 24, 2018 20:00:00", "August 25, 2018 20:00:00", 
                 "August 26, 2018 11:00:00", "August 28, 2018 18:00:00", "August 29, 2018 18:00:00", 
                 "May 24, 2019 19:30:00", "May 25, 2019 19:00:00", "May 26, 2019 11:00:00", 
                 "May 27, 2019 19:00:00", "May 28, 2019 19:00:00", "May 29, 2019 19:00:00", 
                 "May 30, 2019 19:00:00", "May 31, 2019 19:00:00", "June 1, 2019 11:00:00",
                 "June 2, 2019 19:00:00", "June 3, 2019 20:00:00", "June 4, 2019 20:00:00"];
                 
var eventDescriptions = ["Beach Cleanup", "Kids Fair", "Dixieland Jazz Masters", 
                        "Classic Cinema: Wings", "The Future is Prologue", "American Favorites", 
                        "Beach Cleanup", "LHT Jazz Band", "Civic Forum", "Food Bank", "Food Bank", 
                        "Food Bank", "Beach Cleanup", "Hacking your Dreams", "Food Bank", "Food Bank", 
                        "Food Bank", "Food Bank", "Beach Cleanup", "What Einstein Got Wrong", 
                        "Governor's Banquet", "Classic Cinema: City Lights", "Stardust Memories", 
                        "Summer Concert", "Beach Cleanup", "Childrens Shakespeare", "Kids Fair", 
                        "Wildlife Protection", "Animal Shelter", "Beach Cleanup", 
                        "Homeless Shelter", "Tutoring", "Animal Shelter", "School Festival", 
                        "Zoo Support", "Beach Cleanup", "Book Fair", "Kid's Fair", "Marathon Set Up"];

var eventLocation = ["Foster City", "Foster City", "$22/$31/$47", "$5", "$18/$24/$36", "$24/$36/$48", "Foster City", "$24", 
                 "free", "$48/$64/$88", "$48/$64/$88", "$48/$64/$88", "Foster City", "free", "$48/$64/$88", 
                 "$48/$64/$88", "$48/$64/$88", "$48/$64/$88", "Foster City", "free", "by invitation", "$5", 
                 "$24/$36/$48", "$16/$24", "Foster City", "free", "free", "Burlingame", "San Mateo", "Foster City", 
                 "Half Moon Bay", "SF", "San Bruno", "San Carlos", "Belmont", "Foster City", "Woodside",
                 "Redwood City", "SF"];
