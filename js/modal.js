const Modal = {
    header: '',

    submitLabel: 'Submit',

    cancelLabel: 'Cancel',

    content: null,

    submitFunction: () => null,

    overlay: null,

    modalContainer: null,

    headerCancelButton: null,

    cancelButton: null,

    submitButton: null,

    // {
    //     header: Строка, заголовок модального окна,
    //     submitLabel: Строка, текст внутри кнопки "Сохранить",
    //     submitFunction: функция, которая будет выполнена в случае, если пользовать кликнет по кнопке "Сохранить",
    //     content: Контент формы - может быть строкой, представляющей собой html разметку или DOM узлом
    // }

    init(params) {
        Object.keys(params).forEach(param => {
            this[param] = params[param];
        });

        this.build();

        setTimeout(() => {
            this.overlay.classList.remove('modal-overlay_hidden');
        });

        setTimeout(() => {
            this.modalContainer.classList.remove('container_modal_hidden');
        }, 150);
    },

    build() {
        const overlay = document.createElement('div');
        overlay.className = 'modal-overlay modal-overlay_hidden';
        overlay.addEventListener('click', this.cancel.bind(this));

        const modalContainer = document.createElement('div');
        modalContainer.className = 'container container_modal container_modal_hidden';
        this.modalContainer = modalContainer;

        const panel = document.createElement('div');
        panel.className = 'panel';

        const panelHeader = document.createElement('div');
        panelHeader.className = 'panel-header';

        const panelHeaderLabel = document.createElement('div');
        panelHeaderLabel.className = 'panel-header_label';
        panelHeaderLabel.innerHTML = this.header;

        const panelHeaderButtonCancel = document.createElement('div');
        panelHeaderButtonCancel.className = 'panel-header_button_cancel';
        panelHeaderButtonCancel.addEventListener('click', this.cancel.bind(this));

        this.headerCancelButton = panelHeaderButtonCancel;

        panelHeader.append(panelHeaderLabel);
        panelHeader.append(panelHeaderButtonCancel);

        const panelContent = document.createElement('div');
        panelContent.className = 'panel-content';

        const panelContainer = document.createElement('div');
        panelContainer.className = 'container';

        const panelContainerRow = document.createElement('div');
        panelContainerRow.className = 'row';

        if (typeof(this.content) === 'string') {
            panelContainerRow.innerHTML = this.content;
        } else {
            panelContainerRow.append(this.content);
        }

        panelContainer.append(panelContainerRow);

        const panelContainerButtonsRow = document.createElement('div');
        panelContainerButtonsRow.className = 'row';

        const formButtonsContainer = document.createElement('div');
        formButtonsContainer.className = 'form_buttons';

        const cancelButton = document.createElement('button');
        cancelButton.className = 'button_cancel';
        cancelButton.innerText = this.cancelLabel;
        cancelButton.addEventListener('click', this.cancel.bind(this));

        this.cancelButton = cancelButton;

        const submitButton = document.createElement('button');
        submitButton.className = 'button_save';
        submitButton.innerText = this.submitLabel;
        submitButton.addEventListener('click', this.submit.bind(this));

        this.submitButton = submitButton;

        formButtonsContainer.append(cancelButton, submitButton);
        panelContainerButtonsRow.append(formButtonsContainer);

        panelContainer.append(panelContainerButtonsRow);

        panelContent.append(panelContainer);

        panel.append(panelHeader);
        panel.append(panelContent);

        modalContainer.append(panel);

        this.overlay = overlay;
        this.modalContainer = modalContainer;

        document.body.append(overlay, modalContainer);

    },

    cancel() {
        this.close('cancel');
    },

    submit() {
        this.close('submit');
    },

    close(type) {
        this.removeEventListeners();

        this.modalContainer.classList.add('container_modal_hidden');
        this.overlay.classList.add('modal-overlay_hidden');

        setTimeout(() => {

        }, 200);

        if (type === 'submit') {
            this.submitFunction();
        }
    },

    removeEventListeners() {
        this.overlay.removeEventListener('click', this.cancel.bind(this));
        this.headerCancelButton.removeEventListener('click', this.cancel.bind(this));
        this.cancelButton.removeEventListener('click', this.cancel.bind(this));
        this.submitButton.removeEventListener('click', this.submit.bind(this));
    }
};