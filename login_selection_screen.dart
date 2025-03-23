import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';

class LoginSelectionScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Stack(
        fit: StackFit.expand,
        children: [
          Image.asset("assets/townly-bg.jpg", fit: BoxFit.cover),
          Container(color: Colors.black.withOpacity(0.6)),
          Center(
            child: Column(
              mainAxisSize: MainAxisSize.min,
              children: [
                Text("Welcome to", style: TextStyle(fontSize: 28, color: Colors.white)),
                Text("Townly", style: TextStyle(fontSize: 40, fontWeight: FontWeight.bold, color: Colors.yellow)),
                SizedBox(height: 20),
                ElevatedButton(
                  onPressed: () => context.go('/customerLogin'),
                  child: Text("I am a Customer"),
                ),
                SizedBox(height: 10),
                ElevatedButton(
                  onPressed: () => context.go('/businessLogin'),
                  child: Text("I am a Business Owner"),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}
