# Admin Page — Feature Notes

### Layman Terms
I want to add breaks, regions to my app. (These are things that don't change). 
I want to add them to my production database, but I don't want to change the database *directly*.   
__Admin Page feature__ is a way to quality control adding and modifying that data that passes through the production data base.

## Actions
+ View Breaks of a Region
+ Add Breaks to Regions  
~
+ Select Breaks of a Region  
Break Actions:
  + Delete Break (and its related Features)
  + Move Break to a Different Region
  + Check (and view) availability of  Features [for that selected Break]
  + Add Features (Data-Interface)
  + Modify data to the related Feature (Data-Manupulation)

---

### View Breaks of a Region
__user story & e2e test:__

1. After Page Loads, show available Regions
2. Select Region
3. Show Breaks of that region

__dev process & unit tests:__  

*Momentum ng-firestore Recipe:*  
Find Matching-Values of a parent Doc's Array-Value and child Doc's Key-Value pair  

1. Create an *[[ interface ]] with id key* for the region doc
2. Set properties 
   1. interface[]
   2. subscription
3. Set Subscriptions 
   1. On Initialization, subscribe to the a service to read region doc   
  __🧪 UT__: service *exists*  
  __🧪 UT__: service *happens* on initialization
   1. On Destroy, destroy the subscription   
   __🧪 UT__: destroy *happens*
4. Define service to read docs from __RegionsByState *collection*__  
__🧪 UT__: outputs *expected* results
   1. run through the region  __RegionsByState *interface*__
   2. query the __regionsByState *collection*__ where state (key) is equal to stateValue
   3. set stateValue to equal "California"
   4. use *valueChanges()*
5. When click on selected region, double for-loop to find the breaks  
__🧪 UT__: outputs *expected* results
   1. ngFor *arrays* of *docs* (shows the array of breaks for each region doc)
   2. ngFor *values* of *arrays* (shows the breaks of each array)

