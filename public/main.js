function deleting(id) {
    const res = confirm("Are you sure you want to delete this job?");
    if (res) {
       
         // Send an AJAX request to delete the job
      fetch(`/job/delete/${id}`, { method: 'GET' })
      .then(response => {
        if (response.ok) {
          window.location.href = '/jobs';  // Redirect after successful deletion
        } else {
          alert("Job not found or you are not authorized to delete it.");
        }
      })
      .catch(err => {
        console.error('Error deleting job:', err);
      });
    return false;  // Prevent the default anchor action
  }

    return false;
}


function updating(id){
    const res=confirm("Are you sure to update this job?");
    if(res){
        window.location.href = `/job/update-job/${id}`  
    }
}
// function searching(e){
// e.preventDefault();

// const serachValue=document.getElementById('search').value;
// console.log("submitted",serachValue);
// document.getElementById('search').value = '';  // Clear the input field


// }
