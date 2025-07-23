# Header
  -- Logo
  -- Navigation Items ('Home', 'About', 'Contact', 'Cart')
  -- Online/Offline status indicator

# Body

  # RestaurantContainer
    -- Fetches and holds the list of restaurants from Swiggy API
    -- Fetches carousel banners
    -- Search bar to filter restaurants by name
    -- Filter button for sorting by top-rated restaurant

  # RestaurantCard
    -- Image
    -- Name of Restaurant
    -- Star Rating
    -- Cuisines
    -- Delivery time
    -- Cost for Two


  # Shimmer UI
    -- Placeholder loading cards shown until data loads

  # About 
    -- About us Page

  # Contact
    -- Contact information page

  # Error
    -- Fallback page for invalid routes

  # OfflinePage
    -- Show when the user goes offline
    -- Full-screen friendly UI with retry button and clear messaging

  # Redux Toolkit
    -- Install @reduxjs/tookit and react-redux 
    -- Build a centralized Redux store
    -- Created a **cart slice** with:
      -- 'addItem' action - add a food item to cart
      -- 'clearCart' action - remove all items from cart
    -- Connected the Redux store to the app using 'Provider'
    -- Subscribed to cart state using 'useSelector'
    -- Dispatched cart actions using 'useDispatch'
  
