const targetNode = document.querySelector('div[data-test-selector="community-points-summary"]');

if (!targetNode) {
  console.log("Target node not found.");
} else {
  const config = { childList: true, subtree: true };

  const callback = (mutationList, observer) => {
    for (let mutation of mutationList) {
      if (mutation.type === 'childList') {
        checkAndClickRedeemButton();
      }
    }
  };

  const observer = new MutationObserver(callback);

  observer.observe(targetNode, config);

  function checkAndClickRedeemButton() {
    const claimButton = document.querySelector('button[aria-label="Claim Bonus"]'); 
    if (targetNode && targetNode.textContent.includes('to claim a bonus!')) {
      if (claimButton) {
        claimButton.click();
        console.log("Redeem button clicked!");
      } else {
        console.log("Redeem button not found.");
      }
    } else {
      // console.log("No bonus to claim.");
    }
  }

  checkAndClickRedeemButton();
}
