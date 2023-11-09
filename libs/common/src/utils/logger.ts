import * as winston from 'winston';
import * as winstonDaily from 'winston-daily-rotate-file';
const { combine, timestamp, printf } = winston.format;

const logFormat = printf(({ timestamp, level, message, stack }) => {
    if (stack)
        return `[${level.toUpperCase()}] [${timestamp}] - ${message}\n${stack}`;
    else return `[${level.toUpperCase()}] [${timestamp}] - ${message}`;
});

export const logger = winston.createLogger({
    format: combine(
        timestamp({
            format: 'YYYY-MM-DD HH:mm:ss',
        }),
        logFormat,
    ),
    transports: [
        new winstonDaily({
            level: 'info',
            datePattern: 'YYYY-MM-DD',
            dirname: './logs/info',
            filename: `%DATE%.log`,
            maxFiles: 90,
            zippedArchive: true,
        }),
        new winstonDaily({
            level: 'error',
            datePattern: 'YYYY-MM-DD',
            dirname: './logs/error',
            filename: `%DATE%.error.log`,
            maxFiles: 90,
            zippedArchive: true,
        }),
        new winstonDaily({
            level: 'debug',
            datePattern: 'YYYY-MM-DD',
            dirname: './logs/debug',
            filename: `%DATE%.transaction.log`,
            maxFiles: 90,
            zippedArchive: true,
        }),
    ],
});

