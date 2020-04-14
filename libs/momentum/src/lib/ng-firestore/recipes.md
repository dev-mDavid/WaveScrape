# Recipes for using Angular FireStore
---
### Quick Tips
+ Add id key to interfaces
+ Play with database before making interfaces
+ Develop the service in the logic before moving into the services directory
---
## Table of Contents:

### Manipulating *Parent* Docs
+ Find Matching-Values of a *parent* Doc's Array-Value and *child* Doc's Key-Value pair
+ Dialog to add an Arrray-Value in a *parent* Doc
+ Prevent duplication  of multiple *children* Docs with same Query-Values when only one is expected
### Manipulating *Children* Docs
+ Use *child* Interface to generate a new *child* Doc within an Array-Value of a *parent* Doc 
+ Dialog to delete Array-Value of *parent* Doc and related *children* Docs with Matching-Values
+ Query check for existing Doc with a Matching-Value
+ Dailog to manipulate data on a Doc

---
## Find Matching-Values of a *parent* Doc's Array-Value and *child* Doc's Key-Value pair

  Short-Version:   
  For Parent, then Child —   
  Interface, Properties, Event Trigger for Subscription,  Query Service, Double For-Loop for Button Click 

  ### Part  1: *Parent* Doc
  1. __Interface__ — Create interface and data model for *parent* doc
  *[[ interface ]]*

  2. __Properties__ — set properties  
  2–1. *parent* interface (with id) and  
  2–2. [rxjs] subscription  
  *[[ logic ]]*

  3. __Event Trigger from Specified Value__  
  3-1a. ~~on button click event~~  
  3-1b. set function call to be a subscription  
  3–3. destroy subscription in life-cycle hook OnDestroy  
  [[ template / logic ]]

  4. __Query service for *Parent* doc__   
  4–1. runs through *parent's* interface  
  4-2. queries a collection where  
  4–3. key equals a specified value  
  4–4a. if you __don't__ need to add/up the parent doc (array-values),   
  then use [angularfire] *valueChanges()*  
  4–4b. if you __do__ need to add/update the parent doc (array-values),  
  then use [angularfire] *snapChanges()* to get id and other metadata  
  *[[ services ]]*

  5. __Button Click__ — double for-loop to find the Matching Value for *its children* docs  
  5–1. ngFor *arrays* of *docs*  
  5–2. ngFor *values* of *arrays*  
  5–3. click event passing in a selected *value* as a parameter  
  5–4. function is a subscription of a query service   
  *[[ template ]]*

  ### Part 2: *Child* Doc

  6. __Interface__ — Create interface and data model for *child* doc  
  *[[ interface ]]*

  7. __Properties — set properties__  
  7–1. *child* interface (with id) and  
  7–2. [rxjs] subscription  
  *[[ logic ]]*

  8. __Event Trigger from *Parent* Matching Value__  
  8-1a. on button click event  
  8-1b. ~~set function call to be a subscription~~  
  8–2. destroy subscription in life-cycle hook OnDestroy  
  [[ template / logic ]]

  9. __*Child* Query Service__  
  9–1. runs through *child's* interface  
  9–2. queries a collection where    
  9–3. key equals the specified __matching value__ from the *parent*  
  9–4a. if you __don't__ need to add/update this *child* doc   (array-values) from *its children* docs, then use [angularfire] *valueChanges()* to get the id and other metadata  
  9–4b. if you __do__ need to add/update this *child* doc (array-values) from *its children* docs, then use [angularfire] *snapChanges()* to get the id and other metadata  
  *[[ services ]]*    
  *(optional)* — build service in the *[[ logic ]]* before moving it to the *[[ service ]]* directory


  10. __Button Click__ — double for-loop to find the Matching Value for *its children* docs  
  10–1. ngFor *arrays* of *docs*  
  10–2. ngFor *values* of *arrays*  
  10–3. click event passing in a selected *value* as a parameter  
  10–4. function is a subscription of a query service   
  [[ template ]]

---
## Dialog to add an Array-Value in a *parent* Doc

0. on click event of the *child*, capture that Matching-Value to Array-Value of the *parent* Doc
0. with that Matching-Value, make query of *parent* Collection to retrieve data that includes the *parent* Doc Id 
0. pass that data from matching *parent* Doc into a dialog
0. open dialog on button click event
0. if new data added, on dialog close, update and add an Array-Value to the matching *parent* doc

---

+ Read the a Value from an Array from a Doc
+ Read a Doc

+ Read a Doc based on a Value from another Doc
+ Read a Doc based on a Matching Value from another
+ Reading a Value of from an Array in a Doc

__Reading a single Value from a Key in a Doc__
1. query that collection  
1a. by Doc ID   
1b. by key-value pair

2. make it reactive  
2a. observable  
2b. subscription

3. read object  
3a. read object in the template/view  
3b. create object in the logic and render it in the template/view
---
---
