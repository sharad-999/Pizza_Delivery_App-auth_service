import request from 'supertest';
import app from '../../src/app';

describe('POST /auth/register', () => {
    describe('Given all fields', () => {
        it('should return 201 status code', async () => {
            // Arrange Act Assert
            const userData = {
                firstname: 'sharadd',
                lastname: 'kevadiya',
                email: 'sk@gmail.com',
                password: '12345678',
            };

            // Act
            const response = await request(app)
                .post('/auth/register')
                .send(userData);

            // Assert
            expect(response.statusCode).toBe(201);
        });

        it('should return valid json response', async () => {
            // Arrange
            const userData = {
                firstname: 'sharad',
                lastname: 'kevadiya',
                email: 'sk@gmail.com',
                password: '12345678',
            };

            // Act
            const response = await request(app)
                .post('/auth/register')
                .send(userData);

            // Assert
            expect(
                (response.headers as Record<string, string>)['content-type'],
            ).toEqual(expect.stringContaining('json'));
        });
    });

    describe('Fields are missing', () => {});
});
