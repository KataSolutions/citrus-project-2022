#include <climits>
#include <cstdint>
#include <cstdlib>
#include <cstring>
#include <iostream>
#include <sstream>
#include <string>
#include <vector>
#include "qrcodegen.hpp"

using std::uint8_t;
using qrcodegen::QrCode;
using qrcodegen::QrSegment;

int main(){
    const char *text = "Hello, world!";              // User-supplied text
	const QrCode::Ecc errCorLvl = QrCode::Ecc::LOW;  // Error correction level
	
	// Make and print the QR Code symbol
	const QrCode qr = QrCode::encodeText(text, errCorLvl);
}