# Reports System Backend

This is the backend for a reports system built using Express.js and PostgreSQL. This system provides APIs to manage reports, users, authentication, and authorization.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Starting the Server](#starting-the-server)
- [Contributing](#contributing)
- [License](#license)

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js installed on your local machine.
- PostgreSQL installed and running on your local machine.
- A code editor such as Visual Studio Code or Sublime Text.

## Installation

1. Clone the repository:

    ```
    git clone https://github.com/omaressam0858/Reports-Backend.git
    ```

2. Navigate into the project directory:

    ```
    cd Reports-Backend
    ```

3. Install dependencies:

    ```
    npm install
    ```

## Configuration

1. Create a `.env` file in the root directory of the project.
2. Add the following environment variables to the `.env` file:

     -DATABASE_URL=postgresql://username:password@localhost:5432/reportsdb
     -JWT_SECRET=your_jwt_secret


## Starting the Server

To start the server, run the following command:

```
npm run start
```

## Contributing

Contributions are welcome! Feel free to submit pull requests or open issues.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Usage

Once the server is running, you can start making requests to the API endpoints using tools like Postman or directly from your frontend application.
