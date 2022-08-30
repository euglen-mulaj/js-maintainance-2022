import { LightningElement, api } from "lwc";
import LightningConfirm from "lightning/confirm";


export default
class recordCardQuickFiles extends LightningElement {
 @api
 recordId;
 onDeleteAllFilesButtonClick() {
  const confirmation = confirm("Are you sure you want to delete all files?");
   if (confirmation) {
    LightningConfirm.open({
        message: 'Are you sure you want to delete all files?',
        variant: 'headerless',
        label: 'Are you sure you want to delete all files?',
    })
    }
  }
}