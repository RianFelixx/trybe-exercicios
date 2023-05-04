let peca = 'REI';

switch (peca.toLocaleLowerCase()) {
    case 'peão':
        console.log('Vertical(apenas para frente)\nDiagonal(apenas para capturar uma peça)');
        break;
    case 'torre':
        console.log('Vertical\nHorizontal');
        break;
    case 'cavalo':
        console.log('Movimento L(duas casas na horizontal e uma na vertical, ou duas na vertical e uma na horizontal, uma na horizontal e duas na vertical, e assim por diante.)');
        break;
    case 'bispo':
        console.log('Diagonal');
        break;
    case 'rainha':
        console.log('Vertical\nHorizontal\nDiagonal');
        break;
    case 'rei':
        console.log('Vertical(apenas uma casa por vez)\nHorizontal(apenas uma casa por vez)\nDiagonal(apenas uma casa por vez)');
        break;

    default:
        console.log('Error');
        break;
}