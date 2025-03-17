# Development Guidelines

## Commands
- `npm run dev` - Run full-stack app (frontend + backend)
- `npm run server` - Run backend only
- `npm run client` - Run frontend only
- `cd client && npm test` - Run React tests
- `cd client && npm run build` - Build React for production

## Code Style
- Use ES6+ syntax and features
- Frontend: React functional components with hooks
- Backend: Node.js with Express
- Indentation: 2 spaces
- Naming: camelCase for variables/functions, PascalCase for components
- Imports: Group by external, internal, then relative paths
- Error handling: Use try/catch blocks and meaningful error messages
- API responses: Consistent JSON format with status codes

## Git Workflow
- Feature branches from main
- Descriptive commit messages
- Pull requests for code review before merging