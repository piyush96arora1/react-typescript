import * as React from 'react'

export interface IPersonProps {
    name: string;
    age: number;
}

class Person extends React.Component<IPersonProps>{

    constructor(props: IPersonProps) {
        super(props);
    };
    public render() {
       return (

            <div>
                My name is {this.props.name} and my age is {this.props.age}

            </div>

        )


    }

}

export default Person