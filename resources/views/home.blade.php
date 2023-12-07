<!DOCTYPE html>
<html lang="en">

<head>
  <!-- <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" /> -->

  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <!-- Title of the webpage -->
  <title>Shopping List</title>
  <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
  <link rel="stylesheet" href="/css/home.css">

</head>

<body>
  <!-- Main container for the application -->
  <div class="app">
    <!-- Heading for the shopping list -->
    <h4 class="mb-3">Shopping List</h4>
    <!-- Button to trigger the modal for adding new items -->
    <div id="addNew" data-bs-toggle="modal" data-bs-target="#form">
      <span>Add New Items</span>
      <i class='bx bx-plus'></i>
    </div>

    <!-- Modal -->
    <form class="modal fade" id="form" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <!-- Title of the modal -->
            <h5 class="modal-title" id="exampleModalLabel">Add New Item</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <p>Item Name</p>
            <input type="text" class="form-control" name="" id="textInput">
            <div id="msg"></div>
            <br>
            <p>Due Date</p>
            <input type="date" class="form-control" name="" id="dateInput">
            <br>
            <p>Description</p>
            <textarea name="" class="form-control" id="textarea" cols="30" rows="5"></textarea>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="submit" id="add" class="btn btn-primary">Add</button>
          </div>
        </div>
      </div>
    </form>

    <!-- Heading for the list of items -->
    <h5 class="text-center my-3">Items</h5>
    <!-- Container for displaying the list of items -->
    <div id="items">

    </div>
  </div>
</body>
<!-- Include custom JavaScript file for functionality -->
<script src="/js/main.js"></script>
<!-- Include Bootstrap JavaScript -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
  integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>

</html>
