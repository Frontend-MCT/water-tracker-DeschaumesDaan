class ProgressTracker {
  constructor(options) {
    console.log(options);
    this.options = options;

    this.currentProgress = 0;

    this.percentageRatio = 100 / this.options.dailyGoal;

    this.percentage = document.querySelector(
      `.${this.options.domRefs.percentage}`
    );
    this.timeStampHolder = document.querySelector(
      `.${this.options.domRefs.timeStampHolder}`
    );
    this.addButton = document.querySelector(
      `.${this.options.domRefs.addButton}`
    );
    this.currentGoalHolders = document.querySelectorAll(
      `.${this.options.domRefs.currentGoal}`
    );
    this.currentUnitHolders = document.querySelectorAll(
      `.${this.options.domRefs.currentUnits}`
    );

    this.showUserOptions();

    // units: "ml",
    // dailyGoal: 2000,
    // mode: "local",
    // domRefs: {
    //   percentage: "js-amount",
    //   timeStampHolder: "js-timestamps",
    //   addButton: "js-log",
    //   currentGoal: "js-goal",
    //   currentUnits: "js-units"
    // },
    // afterUpdate: function(newPercentage) {
    //   console.log("It has been updated!");
    // }
  }

  showUserOptions() {
    for (const g of this.currentGoalHolders) {
      g.innerHTML = this.options.dailyGoal;
    }

    for (const u of this.currentUnitHolders) {
      u.innerHTML = this.options.units;
    }
  }
}
