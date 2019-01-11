// AliasMapper controller
class AliasMapper extends Stimulus.Controller {
    static get targets() {
        return [
            'form',
            'alias',
            'name',
        ];
    }

    initialize() {
        this.formTarget.addEventListener('submit', (e) => e.preventDefault());

        console.info('TODO: implement AliasMapper controller');
    }
}
