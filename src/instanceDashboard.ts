interface ParameterInstanceDashboard {
    name: String;
    description: String;
    instance: Function;
}

class InstanceDashboard implements ParameterInstanceDashboard{
    name: String;
    description: String;
    instance: Function;

    constructor({ name, description = '', instance }: ParameterInstanceDashboard) {
        this.name = name;
        this.instance = instance();
        this.description = description;
    }
}