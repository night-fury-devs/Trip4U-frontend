/**
 * Author: Mary Kuchumova
 * Date: 31-Jul-16
 * Time: 10:21 AM
 */

export class ModalService {
  
  private getDefaultModal(openModalCallback, closeModalCallback) {
    return {
      dismissible: false,
      opacity: .5,
      in_duration: 300,
      out_duration: 200,
      ready: openModalCallback,
      complete: closeModalCallback
    }
  }

  loadModal(id, openModalCallback, closeModalCallback, props) {
    alert(id);
    props = props || this.getDefaultModal(openModalCallback, closeModalCallback);
    $('#'+id).openModal(props);
  }
  
  closeModal(id) {
    $('#'+id).closeModal();
  }
  
}