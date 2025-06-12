let subscribers = 0;

function likeVideo(button) {
  const countSpan = button.querySelector('.like-count');
  let count = parseInt(countSpan.textContent);
  count++;
  countSpan.textContent = count;
  button.disabled = true;
  button.style.backgroundColor = "gray";
}

function subscribe() {
  subscribers++;
  document.getElementById('subCount').textContent = subscribers;
  alert("Thanks for subscribing!");
}

function openModal(id) {
  document.getElementById(id).style.display = 'block';
}

function closeModal(id) {
  document.getElementById(id).style.display = 'none';
}

window.onclick = function(event) {
  ['signInModal', 'signUpModal'].forEach(id => {
    const modal = document.getElementById(id);
    if (event.target === modal) modal.style.display = "none";
  });
};

function searchFriends() {
  const input = document.getElementById("friendSearch").value.toLowerCase();
  const friends = document.querySelectorAll("#friendsList li");
  friends.forEach(friend => {
    if (friend.textContent.toLowerCase().includes(input)) {
      friend.style.display = "";
    } else {
      friend.style.display = "none";
    }
  });
}