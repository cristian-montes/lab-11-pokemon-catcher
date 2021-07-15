## Making a plan
 1. Load three pokemon -Three NEW pokemon show up on the page.
 
 2. Generate three random pokemon -Check that they're unique (none of the ids are the same). 

 3. If not . . . generate 3 more, and repeat until they are unqie. 

 4. Increment the seen property for all 3 new pokemon -On Loading . . . 

 5. For each of these 3 pokemon, -If they've seen this pokemon before -Grab that particular object from the 'cart' and increment its seen property. 

 6. If they've NOT seen this pokemon before -Initialize a new "cart" with a seen: 1 and caught: 0 -On click.

 7. Increment the caught property of the clicked pokemon -If the user has done this 10 times, redirect to the results page -Otherwise, load 3 more pokemon and REPEAT
