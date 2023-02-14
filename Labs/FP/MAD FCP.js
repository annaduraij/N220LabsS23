/* Plan file for my MAD FCP

Libraries: p5.js

Main Idea: A vertical scrolling game inspired by 'bullet hells' like the flash game Starfire 2 and the iOS game Phoenix 2

What I'm thinking: You have a ship at the bottom of the screen. You WASD to move the ship across the screen. Pressing or Holding 'Space' fires a weapon. Firing weapon costs energy points. Your goal is to clear the wave of randomly-generated oncoming enemies. Survive their bullets, if you get hit, lose health. If you lose all health, game over. If you manage to destroy all enemy spaceships, you earn money.

You can use money to upgrade components of your ship.
Reactor - Affects Energy Capacity and Regen of your Main Weapon
                    L1: Can sustain only the standard beam weapon
                    L2: Can sustain the standard vulcan/flamethrower
                    L3: Can sustain the advanced beam weapon
                    L4: Can sustain the advanced vulcan/flamethrower
                    L5: Can sustain the special beam weapon

Engines - Affects Speed of Ship movement

Weapon Class - Purchase one of four at 4 different types at 3 grades:
                   Vulcan - Machine gun
                   - High fire rate
                   - High spread
                   - Low projectile speed
                   - Moderate range
                   - Moderate Energy Consumption
                   Spammable and reliable weapon. Trades precision for firepower. Typical full auto ballistic weapon.
                      Grade - Standard: Single bullet stream, 33% range, medium fire rate, red circle bullets
                      Grade - Advanced: Dual bullet stream, 50% range, high fire rate, orange circle bullets
                      Grade - Special: Dual bullet stream with extra angled side bullet streams, 80% range, very high fire rate, orange circle bullets

                   RailRepeater - Rail gun
                   - Low fire rate
                   - High precision
                   - High projectile speed
                   - Maximum Range
                   - High Energy Consumption
                    Small recovery time required and spamming is not sustainable even with the highest reactor. Typical semi auto sniper weapon.
                      Grade - Standard: High recovery time, medium projectile speed, medium damage, purple triangle bullet
                      Grade - Advanced: Medium recovery time, high projectile speed, high damage, white triangle bullet
                      Grade - Special: Medium recovery time, high projectile speed, medium damage but burst of 4, green triangle bullet

                   HellSpark - Flame thrower
                   - High Fire Rate
                   - Moderate Precision
                   - Instant projectile speed
                   - Minimal Range
                   - Medium Energy Consumption
                   Fully spammable at corresponding reactor level. Trades range for raw damage. Requires close combat. Typical flamethrower weapon.
                      Grade - Standard: 15 degree cone, 10% range, medium damage, yellow flame
                      Grade - Advanced: 30 degree cone, 20% range, high damage, blue flame
                      Grade - Special: 60 degree cone, 30% range, highest damage, green flame

                   NovaLight - Beam weapon
                   - Maximum Fire Rate
                   - High Precision
                   - Instant projectile speed
                   - Maximum Range
                   - Low Energy Consumption
                   Fully spammable at corresponding reactor level. Trades damage for range and precision. Typical laser weapon.
                      Grade - Standard: Narrow beam, low damage, red beam
                      Grade - Advanced: Moderate beam, medium damage, white beam
                      Grade - Special: Narrow beam but 3 beams, medium damage, green beam



Random Notes:
Ship movement must have some form of easing for acceleration
 */
