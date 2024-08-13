const butInstall = document.getElementById("buttonInstall");

// Logic for installing the PWA
// Event handler for the `beforeinstallprompt` event
window.addEventListener("beforeinstallprompt", (event) => {
  // Store the event so it can be triggered later
  window.deferredPrompt = event;

  // Remove the hidden class from the install button to show it
  butInstall.classList.toggle("hidden", false);
});

// Event handler for the `butInstall` element
butInstall.addEventListener("click", async () => {
  const promptEvent = window.deferredPrompt;

  if (!promptEvent) {
    return;
  }

  // Show the install prompt
  promptEvent.prompt();

  // Wait for the user to respond to the prompt
  const result = await promptEvent.userChoice;
  console.log("User response to the install prompt:", result);

  // Clear the deferredPrompt so it can only be used once
  window.deferredPrompt = null;

  // Hide the install button
  butInstall.classList.toggle("hidden", true);
});

// Event handler for the `appinstalled` event
window.addEventListener("appinstalled", (event) => {
  console.log("👍", "appinstalled", event);

  // Clear the deferredPrompt as it is no longer needed
  window.deferredPrompt = null;
});
