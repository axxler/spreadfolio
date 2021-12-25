function onInstall(e) {
  onOpen(e);
  // Perform additional setup as needed.
}
function onOpen(e) {
  
  makeTriggerIfempty();
       
}

function refresher() {
  var sheet0 = SpreadsheetApp.getActive().getSheetByName('SPREADFOLIO Crypto');
  var sourceRange = sheet0.getRange("E13:E161");
  var destRange=sheet0.getRange("M13:M161"); 
  sourceRange.copyTo(destRange,SpreadsheetApp.CopyPasteType.PASTE_VALUES, false);

  var sheet = SpreadsheetApp.getActive().getSheetByName('Rates');
 
  var cell = sheet.getRange("O1");
 
  var refresh = parseInt(cell.getValue().toString());
  var increment = refresh + 1;
 
  cell.setValue(increment);
}

function hourly() {
  var sheet = SpreadsheetApp.getActive().getSheetByName('SPREADFOLIO Crypto');
  var sourceRange = sheet.getRange("G13:G161");
  var destRange=sheet.getRange("K13:K161"); 
  sourceRange.copyTo(destRange,SpreadsheetApp.CopyPasteType.PASTE_VALUES, false);
}

function dayly() {
  var sheet = SpreadsheetApp.getActive().getSheetByName('SPREADFOLIO Crypto');
  var sourceRange = sheet.getRange("G13:G161");
  var destRange=sheet.getRange("L13:L161"); 
  sourceRange.copyTo(destRange,SpreadsheetApp.CopyPasteType.PASTE_VALUES, false);
}

function makeTriggerIfempty() {
  
  var allTriggers = ScriptApp.getProjectTriggers();

  if(allTriggers.length < 1){

    createTimeDrivenTriggers();

  }
}

function createTimeDrivenTriggers() {
  // Trigger every 1 minute.
  ScriptApp.newTrigger('refresher')
      .timeBased()
      .everyMinutes(1)
      .create();

  // Trigger every 1 hour.
  ScriptApp.newTrigger('hourly')
      .timeBased()
      .everyHours(1)
      .create();

  // Trigger every Monday at 08:00.
  ScriptApp.newTrigger('myFunction')
      .timeBased()
      .everyDays(1)
      .atHour(0)
      .create();
}
