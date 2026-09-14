export function formatLog(mensagem) {
    const timestamp = new Date().toISOString().split('T')[0];
    return `[${timestamp}] - ${mensagem}`;
}